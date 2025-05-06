---
title: Python语法学习
createTime: 2025/04/04 21:02:33
permalink: /demo/7474f28t/
---



以下是为Java开发者整理的Python基础语法快速指南，结合LeetCode高频考点和案例说明：

---

### 一、基础语法差异速查表
| 特性        | Java                   | Python                     |
|-----------|------------------------|---------------------------|
| 语句结束符    | `;`                   | 无（换行符结束）                  |
| 代码块       | `{}`                  | 缩进（4空格）                   |
| 变量声明      | 需要类型声明（`int a = 5;`） | 直接赋值（`a = 5`）              |
| 空值        | `null`                | `None`                    |
| 布尔值       | `true/false`          | `True/False`              |
| 数组        | `int[] arr`           | `list`（动态数组）              |
| 哈希表       | `HashMap`             | `dict`                    |
| 字符串拼接     | `+`                   | `+` 或 f-string（推荐）         |

---

### 二、核心语法结构（附LeetCode案例）

#### 1. 条件判断
```python
# 简单判断
if a > b:
    print("a更大")
elif a == b:
    print("相等")
else:
    print("b更大")

# 三目运算符（不同于Java）
max_val = a if a > b else b
```

#### 2. 循环结构
```python
# 常规for循环（类似Java的foreach）
nums = [1,2,3]
for num in nums:
    print(num)

# 带索引遍历（类似Java的fori）
for i in range(len(nums)):
    print(f"索引{i}, 值{nums[i]}")

# while循环
count = 0
while count < 5:
    print(count)
    count += 1  # Python没有++运算符
```

#### 3. 列表操作（对应Java数组）
```python
# 创建与访问
arr = [1,2,3]
print(arr[1])  # 输出2（索引从0开始）

# 常用方法
arr.append(4)    # 添加元素 → [1,2,3,4]
arr.insert(1,5)  # 插入 → [1,5,2,3,4]
arr.pop()        # 删除末尾 → 4
arr.remove(2)    # 删除第一个匹配项 → [1,5,3]

# 列表推导式（高频考点！）
squares = [x**2 for x in range(5)]  # [0,1,4,9,16]

list1 = [[1,2,3], [4,5,6], [7,8,9]]
# 打印出偶数
# 正常写法
res = []
for i in list1:
    for j in i:
        if j % 2 == 0:
            res.append(j)
print(res)
# 列表推导式
res1 = [x for i in list1 for x in i if x % 2 == 0]
print(res1)
```

#### 4. 字典（对应Java的HashMap）
```python
# 创建与访问
hashmap = {"a": 1, "b": 2}
print(hashmap["a"])  # 输出1

# 常用方法
hashmap["c"] = 3    # 添加/修改
if "b" in hashmap:  # 检查键存在
    del hashmap["b"] # 删除

# 遍历（LeetCode高频操作）
for key in hashmap:
    print(key, hashmap[key])

for key, value in hashmap.items():
    print(key, value)
```

---

### 三、函数定义（对比Java）
```python
# 基本定义（无需声明返回类型）
def add(a, b):
    return a + b

# 默认参数（Java没有的特性）
def greet(name="匿名"):
    print(f"Hello {name}")

# 可变参数（类似Java的...）
def sum_all(*args):
    return sum(args)

# 两数之和解法示例
def twoSum(nums, target):
    hashmap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hashmap:
            return [hashmap[complement], i]
        hashmap[num] = i
    return []
```

---

### 四、类与对象（面向对象差异）
```python
class ListNode:
    # 构造函数（类似Java构造器）
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class MyStack:
    # 实例方法必须包含self参数
    def __init__(self):
        self.stack = []
    
    def push(self, x):
        self.stack.append(x)
    
    def pop(self):
        return self.stack.pop()

# 使用示例
node = ListNode(5)
stack = MyStack()
stack.push(1)
```

---

### 五、算法题高频工具

#### 1. 字符串处理
```python
s = "Hello World"

# 常用操作
words = s.split(" ")     # 分割 → ["Hello", "World"]
new_s = "-".join(words)  # 合并 → "Hello-World"
reversed_s = s[::-1]     # 反转 → "dlroW olleH"
```

#### 2. 集合操作（类似Java的Set）
```python
s = set()
s.add(1)          # 添加元素
if 2 not in s:    # 存在性检查
    print("不存在")
```

#### 3. 优先队列
```python
import heapq

heap = []
heapq.heappush(heap, 3)  # 添加元素
heapq.heappush(heap, 1)
print(heapq.heappop(heap))  # 弹出最小元素 → 1
```

---

### 六、LeetCode典型解题模板

#### 1. 二叉树遍历（递归）
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorder(root):
    if not root:
        return
    print(root.val)
    preorder(root.left)
    preorder(root.right)
```

#### 2. 快速排序实现
```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

---

### 七、避坑指南（Java转Python常见问题）
1. **浅拷贝问题**：`new_list = old_list.copy()` 或 `new_list = old_list[:]`
2. **整数除法**：`//` 是整除，`/` 返回浮点结果
3. **不可变参数**：函数内修改列表等可变对象会影响原始对象
4. **作用域差异**：没有块级作用域，只有函数/全局作用域

---

通过对比Java语法学习Python，重点关注列表操作、字典使用和简洁的语法特性（如列表推导式）。建议通过LeetCode Easy题目（如Two Sum, Reverse String）进行实战练习，快速巩固语法。