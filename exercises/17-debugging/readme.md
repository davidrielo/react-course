## Intro

Component Profiling allows components to be analyzed using browser developer tools. The idea is to record interactions for a period of time and then understand when components were mounted, updated or unmounted. This is great both for beginners and advanced developers to find out what's going on. Component Profiling was added only in v15.4.0.

How to use it:

```
1. Load your app with `?react_perf` in the query string (for example, http://localhost:3000/?react_perf).

2. Open the Chrome DevTools Timeline tab and press Record.

3. Perform the actions you want to profile. Don't record more than 20 seconds or Chrome might hang.

4. Stop recording.

5. React events will be grouped under the User Timing label.
```

## Challenge!

 * Use Google Chrome to debug your code and understand how Component Profiling works.
 * Add a new Guest to the Birthday Party and debug.
 * Add lifecycle hooks and debug.
 * Try it with other examples. 

### Resources
 * [v15.4.0 Release Notes](https://facebook.github.io/react/blog/2016/11/16/react-v15.4.0.html)
 * [React devtools](https://github.com/facebook/react-devtools)
