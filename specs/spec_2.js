describe('console Reporter', function () {
    
    var counter = 5;

    it('case 1',function () {

        expect(counter).toBeLessThan(6);
    })

    it('case 2',function () {
        
        expect(counter).toEqual(5);
    })

    afterEach(function () {
        
        var passed = jasmine.getEnv().currentSpec;
        console.log(`currentSpec ${passed}`);

    })

})