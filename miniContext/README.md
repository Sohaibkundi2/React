# 🧠 React Login (Learning Project)

This is a simple React learning project built to understand how to use **React Context API** with `useState` for global state management.  
It features a basic login form and profile view using shared user state.

---

## 📚 What I Learned

- How to create and use `React.createContext()`
- How to manage global state using `Context` + `useState`
- How to wrap the app in a custom context provider
- How to access context using `useContext()`

---

## 📁 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── components/
│ ├── Login.jsx
│ └── Profile.jsx
├── context/
│ ├── userContext.js
│ └── UserContextProvider.jsx
```

## 🧪 Key Concepts

### ✅ Create a context

```js
import { createContext } from 'react';
const userContext = createContext();
export default userContext;
```

### ✅ Provide context to the app
```jsx
<userContext.Provider value={{ user, setUser }}>
  {children}
</userContext.Provider>
```

### ✅ Use context in a component
```js
const { user, setUser } = useContext(userContext);      
```
##  Author
Sohaib Kundi – [Github](github.com/sohaibkundi2)

