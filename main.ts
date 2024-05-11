
namespace checkEquality {

    function arrayEqual(first: any[], second: any[]): boolean {
        if (first.length !== second.length) return false;
        return first.every((value, index) => equal(value, second[index]));
    }

    export function equal(first: any, second: any): boolean {
        if (Array.isArray(first) && Array.isArray(second)) {
            return arrayEqual(first as any[], second as any[]);
        }
        return first === second;
    }
}