const element = document.head.querySelector('meta[name="csrf-token"]');

export function getCsrfToken(): string {
    return element?.getAttribute("content") || "";
}

export function refreshCsrfToken(): void {
    // TODO
}
