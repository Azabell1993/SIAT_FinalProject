#include "addFunction.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

say_add(addFunction , int)

int main(int argc, char* argv[])
{
    /*
        return printf("my result : %d\n\n", result);
    주석 해제 시 사용 방법.
    addFunction add = new_addFunction();
    add.setAdd(&add, 12,20);
    add.getAdd(&add);
    */

    int a = 20;
    int b = 40;
    addFunction add = new_addFunction();
    add.setAdd(&add, a, b);
    printf("%d", add.getAdd(&add));
}