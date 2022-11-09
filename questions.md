  ## QUESTION 1

  PureComponent exposes shouldComponentUpdate to invoke renders only under certain conditions where Component does not expose this function

  ## QUESTION 2

  since shouldcomponentupdate determines if a component needs to be rendered according to state changes or prop changes,
  if we make a component context dependant we may expose it
  to state changes from unrelated components thus rendering unnecessarily

  ## QUESTION 3

  * we may pass the child a callback that is defined at parent scope
  * we may define shared context and expose hooks to share information
  * we may use redux to share info between a child component and its parent

  ## QUESTION 4

  * define components with React.memo thus attaching it shouldComponentUpdate behaviour
  * define components at a scope which doesnt take state change effects

  ## QUESTION 5

  * React.Fragment can help us stack elements together without wrapping them with extra dom elements (div..etc)
  * Using Fragments on reusable components may cause issues at certain times, since styling may defer upon context of usage
  which may lead to unexpected looks of the component

  ## QUESTION 6

  1. Preload data before rendering. ex: display list of data from api:

  function withData(Component: FunctionComponent<{data: any}>) {
     return () => {
      if(data not ready)
      return <LoadingOverlay/>
      else
      return <Component {...data}/>
      }
      }
  2. Secure components with authentication requirements

  function withAuth(Component: FunctionComponent) {
    return () => {
    if(!not authorized)
    return <Navigate to={‘/login’}/>
    else
    return <Component/>
    }
  }

  3. Loading overlay

  function withLoading(Component: FunctionComponent) {
    return () => {
    if(!condition)
    return <LoadingOverlay/>
    else
    return <Component/>
    }
  }

  ## QUESTION 7

  handling exceptions in promises is done by using catch method awaiting a function passes exception handling responsibillity to using function thus forces us to use try catch

  ## QUESTION 8

  setState may take new state to replace current state
  as object
  or a callback which exposes previous state as argument
  thus giving us the option to update accordingly.
  async setState calls are batched to provide a better user experience and performance making it synchronous might leave the browser unresponsive tho to expensive operations.

  ## QUESTION 9

  1. Change the class to a function
  2. Remove the render method
  3. Convert all methods to functions
  4. Remove references to this
  5. Remove constructor
  6. Replace this.setState
  7. Replace lifecycle methods with hooks

  ## QUESTION 10

  using css files and importing them inside component files
  using inline-style objects that define style properties as CSSProperties
  using bootstrap classes to style components

  ## QUESTION 11
