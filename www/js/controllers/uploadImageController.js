var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
var file = new Parse.File("myfile.txt", { base64: base64 });

/*
var bytes = [ 0xBE, 0xEF, 0xCA, 0xFE ];
var file = new Parse.File("myfile.txt", bytes);
*/

var file = new Parse.File("myfile.zzz", fileData, "image/png");
var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";

  var parseFile = new Parse.File(name, file);
}

parseFile.save().then(function() {
  // The file has been saved to Parse.
}, function(error) {
  // The file either could not be read, or could not be saved to Parse.
});

var jobApplication = new Parse.Object("JobApplication");
jobApplication.set("applicantName", "Joe Smith");
jobApplication.set("applicantResumeFile", parseFile);
jobApplication.save();


// // $scope.uploadFile = function(files) {
// //     var fd = new FormData();
// //     //Take the first selected file
// //     fd.append("file", files[0]);

// //     $http.post(uploadUrl, fd, {
// //         withCredentials: true,
// //         headers: {'Content-Type': undefined },
// //         transformRequest: angular.identity
// //     }).success( ...all right!... ).error( ..damn!... );

// // };


// // camera is simply an injected service, wrapping the cordova APIs
// .controller('ImageSubmissionCtrl', function($scope, $http, camera) {
 
//   var vm = $scope;
//   var imageData;
 
//   // Object to save to Parse that includes an image
//   var object = {
//     text: "includesImage",
//     image: null
//   };
 
//   // Function to take a picture using the device camera
//   vm.takePicture = function() {
 
//     // Define various properties for getting an image using the camera
//     var cameraOptions = {
//       quality : 75,
//       // This ensures the actual base64 data is returned, and not the file URI
//       destinationType: Camera.DestinationType.DATA_URL,
//       encodingType : Camera.EncodingType.JPEG
//     };
 
//     // Use the Cordova Camera APIs to get a picture. For brevity, camera
//     // is simply an injected service
//     camera.getPicture(cameraOptions).then(function(returnedImageData) {
//       imageData = returnedImageData;
 
//     }, function(err) {
//       console.log("Error taking picture: " + err);
//     });
//   };
 
//   // Function to submit the object to Parse using the REST API
//   vm.submitObject = function() {
 
//     // This part is important. As part of the JSON that we send to Parse,
//     // we need to specify the content type here as a field(__ContentType)
//     // along with the image data. Notice that the Content-Type specified
//     // in the headers is actually "plain/text"
//     var dataToSubmit = {__ContentType : "image/jpeg", base64 : imageData};
 
//     // First upload the image file
//     $http.post("https://api.parse.com/1/files/image.jpg", dataToSubmit, {
//            headers: {
//                "X-Parse-Application-Id": y60x73wXpfSalnjjHmlBQnqTzFqEzgf9s9AD1uAd,
//                "X-Parse-REST-API-Key": ZicaZtESRtFTR9tVB3fmay32zMwRUmtSfCkjqrhN,
//                "Content-Type": "plain/text"
//            }
//     })
//     .success(function(result) {
//       // Now associated the image file with the object
//       coupleImageFileWithObject(result.name);
//     })
//     .error(function(result) {
//       console.log("Error uploading image file: " + err);
//     });
//   };
 
//   // Function to associate the image file with an object and save the
//   // object to Parse using the REST API
//   function coupleImageFileWithObject(fileName) {
 
//     // Assign the filename to our object prior to saving it to Parse
//     object.image = {name : fileName, __type : "File"};
 
//     // The 'ObjectClass' in the url should be replaced by the class name
//     // of the object you are saving
//     $http.post("https://api.parse.com/1/classes/ObjectClass", object, {
//            headers: {
//                "X-Parse-Application-Id": y60x73wXpfSalnjjHmlBQnqTzFqEzgf9s9AD1uAd,
//                "X-Parse-REST-API-Key": ZicaZtESRtFTR9tVB3fmay32zMwRUmtSfCkjqrhN
//              }
//       })
//       .success(function(result) {
//         console.log("Object successfully saved.");
//       })
//       .error(function(result) {
//         console.log("Error coupling image file with object: " + err);
//       });
//   };
// });