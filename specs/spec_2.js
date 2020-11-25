describe('spec 2 test suite', function () {
    
    var counter = 5;

    it('spec 2 test 1',function () {

        expect(counter).toBeLessThan(6);
    })

    it('spec 2 test 2',function () {
        
        expect(counter).toEqual(5);
    })

    afterEach(function () {
        
        var passed = jasmine.getEnv().currentSpec;
        console.log(`currentSpec ${passed}`);

    })

})