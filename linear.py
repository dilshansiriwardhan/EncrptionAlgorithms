
def linear(arr , index):
    for i in range(len(arr)):
        if(arr[i] == index):
            return i

if __name__ == '__main__':
    numbers = [1,2,3,4,5]
    print(linear(numbers , 5))
    