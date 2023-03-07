import { searchSpaces } from './search'
import { delay, delayedSearch } from './common'

describe("delay", () => {
    it("should wait for the specified time before resolving the promise", async () => {
        const startTime = new Date().getTime();
        await delay(1000);
        const endTime = new Date().getTime();
        const elapsedTime = endTime - startTime;
        expect(elapsedTime).toBeGreaterThanOrEqual(1000);
    });
});

describe("searchSpaces with delay", () => {
    it("should return non empty array or error after a delay", async () => {
        let results;
        try {
            results = await searchSpaces("")
                .then(delay(500))
                .then((a) => a.spaces);
            expect(results).toBeInstanceOf(Array);
            expect(results.length).toBeGreaterThanOrEqual(1);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual("Network error");
        }
    });
});

describe("delayedSearch", () => {
    it("should work similar to searchSpaces with delay", async () => {
        let results;
        const startTime = new Date().getTime();
        try {
            results = await delayedSearch("", 500, 'space')
                .then((a) => a.spaces);
            const endTime = new Date().getTime();
            const elapsedTime = endTime - startTime;
            expect(elapsedTime).toBeGreaterThanOrEqual(500);
            expect(results).toBeInstanceOf(Array);
            expect(results.length).toBeGreaterThanOrEqual(1);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual("Network error");
        }
    });
});