export function readFileAsDataString(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            resolve(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    });
}
