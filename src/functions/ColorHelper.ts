export function hexToRgba(hex: string, alpha: number = 1): string | null {
    // Entferne das #-Zeichen am Anfang, falls es vorhanden ist
    if (hex.startsWith("#")) {
        hex = hex.slice(1);
    }

    // Überprüfe, ob der Hexadezimalcode eine gültige Länge hat
    if (hex.length !== 3 && hex.length !== 6) {
        return null; // Ungültiger Hexadezimalcode
    }

    // Wenn der Hexadezimalcode 3 Zeichen hat, erweitere ihn auf 6 Zeichen
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Parsen der Hexadezimalwerte für Rot, Grün und Blau
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Überprüfe, ob die geparsten Werte gültig sind
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        return null; // Ungültiger Hexadezimalcode
    }

    // Überprüfe den Alpha-Wert und setze ihn auf einen gültigen Bereich (0-1)
    alpha = Math.max(0, Math.min(1, alpha));

    // Erzeuge die RGBA-Zeichenkette
    const rgba = `rgba(${r},${g},${b},${alpha})`;
    return rgba;
}