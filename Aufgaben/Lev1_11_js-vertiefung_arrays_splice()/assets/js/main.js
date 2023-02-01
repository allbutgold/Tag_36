let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

array.splice(0, 2, "image008.jpg", "image009.jpg", "image010.jpg")
console.log(array);

array.splice(4, 0, "image014.jpg", "image015.jpg", "image016.jpg", "image017.jpg", "image018.jpg", "image019.jpg")
console.log(array);

array.splice(0, 0, "image001.jpg", "image002.jpg", "image003.jpg", "image004.jpg", "image005.jpg", "image006.jpg", "image007.jpg")
array.splice(10, 0, "image011.jpg", "image012.jpg", "image013.jpg")
console.log(array);
