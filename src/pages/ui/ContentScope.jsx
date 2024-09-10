import { Children, cloneElement, isValidElement } from 'react'
import Content from './Content'

const ContentRegex = /(::.*?::)/g
const InnerContentRegex = /^::(.*?)::$/

const transformString = (string) => {
  const matches = string.split(ContentRegex).filter(Boolean)
  if (matches) {
    return matches.map((part) => {
      const match = part.match(InnerContentRegex)
      if (match) {
        return (
          <Content
            key={id}
            id={match[1]}
          />
        )
      } else {
        return part
      }
    })
  }
  return string
}

const transformElement = (element) => {
  const props = element.props
  const children = props.children
  const childrenArray = Children.toArray(children)

  const transformedChildren = Children.map(childrenArray, (child) => {
    if (isValidElement(child)) {
      return transformElement(child)
    } else if (typeof child === 'string' || child instanceof String) {
      return transformString(child)
    } else {
      return child
    }
  })

  return cloneElement(element, {
    ...props,
    children: transformedChildren
  })
}

const ContentScope = (props) => {
  const children = props.children
  const childrenArray = Children.toArray(children)
  return Children.map(childrenArray, (child) => transformElement(child))
}

export default ContentScope
