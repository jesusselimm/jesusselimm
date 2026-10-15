/**
 * Tiny chiptune UI sounds, synthesized with Web Audio (no audio files).
 * Off by default; the choice is saved in localStorage. Browsers only let audio
 * start after a user gesture, so the context is created/resumed on the first
 * click or key press (see unlockAudio).
 */

type Listener = () => void;

const listeners = new Set<Listener>();
let enabled = false;
let loaded = false;
let ctx: AudioContext | null = null;
let lastNote = 0;

// C major pentatonic, two octaves: any hover order sounds fine together.
const SCALE = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51];

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    enabled = localStorage.getItem("sound") === "on";
  } catch {}
}

export function subscribe(l: Listener) {
  load();
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}
export function getSnapshot() {
  load();
  return enabled;
}
export function getServerSnapshot() {
  return false;
}

function ensureContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** Call from any user gesture so later hover sounds are allowed to play. */
export function unlockAudio() {
  if (enabled) ensureContext();
}

function tone(freq: number, dur = 0.08, type: OscillatorType = "square", vol = 0.045, slideTo?: number) {
  if (!enabled) return;
  const c = ensureContext();
  if (!c || c.state !== "running") return;
  const t = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

export function setEnabled(next: boolean) {
  load();
  enabled = next;
  try {
    localStorage.setItem("sound", next ? "on" : "off");
  } catch {}
  listeners.forEach((l) => l());
  if (next) {
    ensureContext();
    // confirmation blip once the context has had a tick to start
    setTimeout(() => playPower(true), 40);
  }
}

/** Hover note for the n-th item of a group. */
export function playNote(index: number) {
  const now = Date.now();
  if (now - lastNote < 35) return;
  lastNote = now;
  tone(SCALE[index % SCALE.length], 0.09, "square", 0.04);
}

export function playClick() {
  tone(340, 0.06, "square", 0.05, 200);
}

export function playPop() {
  tone(420, 0.11, "triangle", 0.08, 120);
}

export function playPower(on: boolean) {
  const [a, b] = on ? [523.25, 783.99] : [783.99, 523.25];
  tone(a, 0.07, "square", 0.045);
  setTimeout(() => tone(b, 0.09, "square", 0.045), 75);
}
