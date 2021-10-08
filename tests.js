window.onload = () =>{

    // initialize mocha
    mocha.setup(
        {
            ui:'bdd'
        }
    );
    mocha.checkLeaks();
    // chai has a lot of stuff, let's make assert global
    let assert = chai.assert;

    describe("filterBannedWords",function () {
        it("Method receives array of bad words and filtered out bad words from string",function () {
            assert.equal('This,house,is,nice!',"This house is not nice!".filterBannedWords(['not']));
        })
    });


    describe("bubbleSort",function () {
        it("The method is a simple bubble sorting algorithm that sorts array of integer ",function () {
            let arr = [6,4,0,3,-2,1];
            assert.equal([-2, 0, 1, 3, 4, 6],arr.bubbleSort());
        })
    });

    describe("Teach",function () {
        it("Teach method on Teacher class to display the Teacher's name and the subject he/she is teaching", function () {
            assert.equal("Emmanuel is now teaching Web Application Programming",faculty.teach("Web Application Programming"));
        });
    })

    mocha.run();
}
