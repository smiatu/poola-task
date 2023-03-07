import { delay, searchSpaces } from './search'

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
    it("should return non empty array after a delay", async () => {
        const results = await searchSpaces("")
            .then(delay(500))
            .then((a) => a.spaces);
        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBeGreaterThanOrEqual(1);
    });
});