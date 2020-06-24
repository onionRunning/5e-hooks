### 自定义hook库


#### useResetAction

***当页面离开时触发***

无返回值

```js
const resetState = () => {
    setAge(0)
    setValue({})
}

useResetAction(resetState)
```

#### useToggle

#### useDebounce

***指定函数内触发***

```js
// run: 执行 cancel: 取消
const [run, cancel] = useDebounce(fn, time)

```

#### useThrottle

#### useLocalStorage

#### useSessionStorage


### 公共常用函数库


#### isNumber

#### isString

#### isObject

#### formatTime 格式化时间


导出使用的时候按需加载
