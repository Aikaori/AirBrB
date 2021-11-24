# Assessment 2 - TESTING

## 1. Component testing
There are three different component tests, including testing defined input field, popup leave reviews and thumbnail carousel.

1. InputField test
This test is to determine whether the defined actions for the input can be render correctly.
Firstly, since there is a show/hide password button in the input field if the input type is password, the show/hide password button will be tested first. 

The button will be test whether it can trigger click handler so that the input type can be changed and the password can be shown or hide. Then, as the button has no any text inside, aria-label will be tested to ensure the accessibility is perfomed on this button. Finally, as this component will be used for show or hide password, the icon of this button may be different. Therefore, a icon will be set as property and check whether this button contains the icon.

After testing the button, the entire input field will be tested. 
Firstly, the type of the input field will be tested to ensure it can have correct input type so that if the type is password, it will not display as text which is not secure.
Secondly, the input field will be tested whether a user defined keydown event handler can be trigger so that when a special situation of keydown can be handled while using this component.
Thirdly, as the input field will be warned if parent components set a warning to this component. It is important to remove wanring after user input something to make the text clear. Therefore, it will be tested whether the warning is assigned to be false. 
Fourth, the most important thing is that the input value can be displayed on the screen, therefore, a simulated change event will be performed and test whether the provided value is set to the component. 
Fifth, as the parent component need to monitor whether there is value in the input component so that the warning can be triggered after attempting submit the input. So the hasInput function will be tested whether it will be changed after input.
Sixth, as this component is design to have a different label after focusing, the labels will be tested. The orgin label will be tested when the component is not focus. Then, another label will be teste to ensure it will be displayed after the component is focused. Finally, for the show/hide button, it will be tested whehter the input type changed after click the button to ensure the use can see or hide the password.

2. popup leave review test
This component will be displayed after user want to leave a review to a specify booking. Therefore, it should be tested to ensure user can correctly leave a comment a rating to the booking.

Firstly, there are a close button and wrap for user to close the pop up. Therefore, these two will be tested to ensure the popup can be close. 
Secondly, the user input should be tested to ensure user have correct review for a booking. This will require three different state to check whether the review is set correctly. The first type is to check whether all the input are not empty. The message that will be popup is tested to see whether it is the correct message to remind user. Then, the second case is user input comment but empty rating. This will be tested by setting a change event with a value to comment. Then the submit button is triggered. The message will be tested to see whether the correct message is shown. The last case is user rate the booking but have empty comment. The messaage will be tested as well in this case.

3. Thumbnail carousel test
This component will be displayed different thumbnail to user. Since it is a bad design to show all the thumbnail at the same time, a carousel will be created to enable user to shift between thumbnail and review them. Therefore, the most important thing is to test whether the correct thumbnail is displayed to the user.

Before the test, a fake cover image and a fake array of additional image are defined for the following tests to test whether the image tag have these fake image as source correctly.

Firstly, the cover thumbnail will be tested. Since the carousel should display a fixed image after the user want to review other images, the cover thumbnail must be displayed after the this component is mouted. Therefore, the first test is to check whether the cover is shown and other thumbnails are not exist in the dom. 
Secondly, after the user click on the button, this component should have change the thumbnail and display the one that user want to see. For user clicking the previous button, the test will check whether the current image is shift to right and previous image is displayed. Similarly, for next button is clicked, the test will check whether the current image is shift to left and next image is displayed. 
Finally, as this is the carousel, the user may click the button forever. It is important to ensure the image display correctly. Therefore, there are two extra tests, one is clicking the previous button continuously and the other is clicking the next button continuously. For both tests, the shifted image will be tested to see whether it is the correct image to be shifted and the displayed image will be tested to see whether it is the correct image to be displayed on the screen.

4. UI testing
The ui test will be following to the spec of the ass3.
Firstly, the register section will be test. The user first reach the home page, click on the menu button to select the register option. After user register successfully, a popup will be shown to tell the user that the register is success.
Secondly, user can directly go to create listing section simply by clicking the menu button and click the create button to go to the creating page. The user need to follow the page and enter all required information. Every step user need to click next button to jump to next step of the form. After all forms are filled correctly, he/she can submit the request and a popup will be shown if the listing is successfully created.
Thirdly, as in the second part, it will jump to the mylistings page to shown all the created listings, all listings will be shown. There is a button for each button to modify the detail of the listing. User can click on edit button on specific listing to modify. Similar to create test, each form will be shown on each step. User need to fill the form that he what to change. In each form, there is a update button, so user can click on it after the modification is finish. In this test, user need to browse through until he/she finish editing on thumbnail and title. A success message will be popup if user's modification has recorded on the server.
Fourth, after modification, user will bring to the mylisting page again. There is a publish button for each listing. He/she can click on one button to trigger a popup to fill in the availabilities of the listing. Once all availabilities are filled correctly, user can click on publish button to publish this listing.
Fifth, after user publish the listing, the publish button of this listing will be replaced by a unpublish button. User can simply click on it to unpublish this listing.
Sixth, since there will be a booking test in the ui test, a listing need to publish so that another user can see this listing and book. So step four will be repeated.
Seventh, for the log out test, user click on the menu button, and there is a logout button. Click on it the user then can send a logout request to server. After successfull logout, a popup will be shown to tell the user that he/she is logout.
Lastly, user click on the menu button. There is a login button and will bring user to login page. Filled in all required information and click on login button. A popup will be shown if user successfully login.

For the second ui test, it will test a path of register, booking.
The first step is similar to previous ui test. Different begins at step 2.
Step2, user will be bring to home page after register. Home page will shown all the listings, click on one of those will bring to a listing detail page. There are buttons at the bottom. Click on the book button will popup a booking container. User filled in the date he/she want to book for this listing. Click on the book button will send request to the server. If successfull book this listing, a popup will shown to tell user that the booking is success.