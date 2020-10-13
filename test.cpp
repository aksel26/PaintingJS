// you can use includes, for example:
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;
int solution(string &S)
{
    int size = S.size();
    char a = 'a';
    int cnt = 0;
    for (int i = 0; i < size; i++)
    {
        if (S[i] == a)
        {
            cnt++;
        }
    }

    if (S.length() == 2 && S.substr(0, 2) == "aa")
    {
        // cout << 0 << endl;
        return 0;
    }
    else if (S.find("aa") == -1)
    {
        if (S.find("a") != -1)
        {
            int result = (size + 1) * 2 - (cnt + 1) * 2;
            return result;
        }
        int result = (size + 1) * 2;
        return result;
    }
    else if (S.find("aa") != -1)
    {
        if (S.find("aaa") != -1)
        {
            return -1;
        }
        int result = (size + 1) * 2 - (cnt + 1) * 2 - 1;
        return result;
    }
}

int main()
{
    string s = "aabbb";
    cout << solution(s) << endl;
    return 0;
}