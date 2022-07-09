#include "addFunction.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

say_add(addFunction , int)

int main(int argc, char* argv[])
{
    addFunction add = new_addFunction();
    add.setAdd(&add, 12,20);
    add.getAdd(&add);
}