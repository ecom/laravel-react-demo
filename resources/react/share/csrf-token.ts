const element = document.head.querySelector('meta[name="csrf-token"]');

export function getCsrfToken(): string | null {
    return element?.getAttribute("content") || null;
}

export function refreshCsrfToken(): void {
    // TODO
}
