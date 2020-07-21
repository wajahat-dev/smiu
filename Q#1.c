

// Question #1:      For a given diagonal of a screen, calculate the following in real numbers:

//  1) Area of Screen
//  2) Aspect Ratio of the Screen


#include <stdio.h>


// area(ratio) of any widht and height
float area(float width, float height){
    return (width *height);
}

// The relationship between the width and the height of the image(square) is the aspect ratio.
float ratioAspect(float width, float height){
    return (width/ height);
}
 
int main()
{
   
    printf("Aspect ratio of a image ,%f",ratioAspect(1920,1080));
	printf("Squre of a screen ,%f",area(1920,1080));
    return 0;
}
