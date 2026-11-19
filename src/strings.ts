export function reverseString(s: string): string {
    return s.split('').reverse().join('');
}

// Test case
if (require.main === module) {
    console.log(reverseString("hello") === "olleh"); // true
    console.log(reverseString("") === ""); // true
}
