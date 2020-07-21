
#include <stdio.h>
#include <math.h>


float pi_archimedes(float n){
    float polygon_edge_length_squared = 2;
    float polygon_sides = 2;
    for (int i=0; i < n; i++){
        polygon_edge_length_squared = 2 - (2 * sqrt((1 - polygon_edge_length_squared / 4)));
        polygon_sides *= 2;
    }
    return (polygon_sides * sqrt(polygon_edge_length_squared));
}
    
    
int main()  
{     
    int places = 5;
    float old_result = 0.0;
    for(int n=0; n < 5*places; n++){
       float result = pi_archimedes(n);
       if(n == places){
            printf("%3d: %.3f\n",n, result);
        }    
    }
    
    return 0; 
}