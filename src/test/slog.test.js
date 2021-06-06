function mum(a, b) {
	return a * b;
}

describe('mum a * b ', () => {
	it("argument", () => {
		expect(mum(6, 2)).toBe(12);
	})
})