/** 
 * 
 * Tests the functionality of the function in form.js
 * 
 * @author AN051810 
 */
describe('contacts form', function() {
    var templateSource, fakeData;
    
    beforeEach(function() {
        // This is the copy of a part of the handlebar template which is used for rendering the contact form. 
        templateSource = 
        '   <form id="contactform" action="javascript:void(0)">'+
        '      <div class="form-group center-block">'+
        '        <label for="inputName">Name</label>'+
        '        <input type="text" class="form-control contact-input" id="inputName" placeholder="Please enter your name" name="Name"/>'+
        '      </div>'+
        '      <div class="form-group center-block">'+
        '        <label for="inputEmail">Email</label>'+
        '        <input type="email" class="form-control contact-input" id="inputEmail" placeholder="Please enter your email ID" name="Email"/>'+
        '      </div>'+
        '      <div class="form-group center-block">'+
        '        <label for="inputMessage">Input Message</label>'+
        '        <textarea id="inputMessage" class="form-control contact-input" rows="3" placeholder="Please enter your concern in detail" name="Message"/></textarea>'+
        '      </div>'+
        '      <input type="text" name="_gotcha" class="display-none"/>'+
        '      <div class="text-center">'+
        '        <button class="btn btn-default" type="submit" id="email-submit-btn" value="Send">submit</button>'+
        '      </div>'+
        '    </form>';

        // Mock contact form data
        fakeData = {
            form: [
                {inputName: "aditya", inputEmail: "aditya@gmail.com", inputMessage: "This is a test message"}
            ]
        };
        $("body").append(templateSource);
        $("#inputName").val(fakeData.form[0].inputName);
        $("#inputEmail").val(fakeData.form[0].inputEmail);
        $("#inputMessage").val(fakeData.form[0].inputMessage);

    });

    it("on submit action will call ajax post method", function() {
        var url = "file:///C:/jasmine/SpecRunner.html?Name=aditya&Email=aditya%40gmail.com&Message=This+is+a+test+message&_gotcha="
        
        // spyOn($, "ajax")
        
        $("#contactform").submit();
        
        /*
        expect($.ajax).toHaveBeenCalledWith({
              method: 'POST',
              url: '//formspree.io/aditya.murthy@cerner.com',
              data: $('#contactform').serialize(),
              datatype: 'json'
        });
*/
        //expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(url);
        
        //expect($.ajax.calls.mostRecent().args[0].url).toEqual("file:///C:/jasmine/SpecRunner.html?Name=aditya&Email=aditya%40gmail.com&Message=This+is+a+test+message&_gotcha=");
    });
});    