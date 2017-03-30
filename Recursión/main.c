#include <stdio.h>
#include <stdlib.h>

int main()
{
   int num = 5;
   int i;
   int factorial = 1;

   for (i = num; i >= 1; i--)
   {
    factorial = factorial * i;

   }
   printf("El factorial de 5 es: %d",factorial);
    return 0;
}
