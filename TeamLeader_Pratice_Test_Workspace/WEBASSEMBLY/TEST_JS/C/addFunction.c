//EMSCRIPTEN_KEEPALIVE
#include "addFunction.h"
#include <stdio.h>
#include <emscripten.h>

int AddResult(int numA, int numB);

#ifdef __cplusplus
extern "C" {
#endif

say_add(addFunction , int)

EMSCRIPTEN_KEEPALIVE 
int AddResult(int numA, int numB)
{
    addFunction add = new_addFunction();
    add.setAdd(&add, numA, numB);
    int result = add.getAdd(&add); 
    return (result);  
}

#ifdef __cplusplus
}
#endif


/*
function ccall(ident, returnType, argTypes, args, opts) {
    var toC = {
        "string": function(str) {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) {
                var len = (str.length << 2) + 1;
                ret = stackAlloc(len);
                stringToUTF8(str, ret, len)
            }
            return ret
        },
        "array": function(arr) {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret
        }
    };
    function convertReturnValue(ret) {
        if (returnType === "string")
            return UTF8ToString(ret);
        if (returnType === "boolean")
            return Boolean(ret);
        return ret
    }
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    if (args) {
        for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
                if (stack === 0)
                    stack = stackSave();
                cArgs[i] = converter(args[i])
            } else {
                cArgs[i] = args[i]
            }
        }
    }
    var ret = func.apply(null, cArgs);
    function onDone(ret) {
        if (stack !== 0)
            stackRestore(stack);
        return convertReturnValue(ret)
    }
    ret = onDone(ret);
    return ret
}
*/

/*
    var ret = func.apply(null, cArgs);
    function onDone(ret) {
        if (stack !== 0)
            stackRestore(stack);
        return convertReturnValue(ret)
    }
*/