function sum(a, b) {
	return a + b;
}

describe('sum a + b ', () => {
	it("argument", () => {
		expect(sum(6, 2)).toBe(8);
	})
})