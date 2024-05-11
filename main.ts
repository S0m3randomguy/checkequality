
namespace checkEquality {

    function arrayEqual(first: any[], second: any[]): boolean {
        if (first.length !== second.length) return false;
        return first.every((value, index) => equal(value, second[index]));
    }

    function objectEqual(first: {[key: string]: any}, second: {[key: string]: any}): boolean {
        let firstKeys = Object.keys(first);
        let secondKeys = Object.keys(second);
        if (firstKeys.length !== secondKeys.length) return false;
        
        firstKeys.sort();
        secondKeys.sort();
        if (!arrayEqual(firstKeys, secondKeys)) return false;
        return firstKeys.every((value) => equal(first[value], second[value]));
    }

    export function equal(first: any, second: any): boolean {
        if (Array.isArray(first) && Array.isArray(second)) {
            return arrayEqual(first as any[], second as any[]);
        }
        if (typeof first === "object" && typeof second === "object") {
            return objectEqual(first as object, second as object);
        }
        return first === second;
    }
}