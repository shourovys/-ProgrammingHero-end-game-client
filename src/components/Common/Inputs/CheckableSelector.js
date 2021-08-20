import { Tag } from 'antd'
import React, { useEffect, useState } from 'react'

const { CheckableTag } = Tag

const CheckableSelector = ({ tagsData, menuTime, handelBlur }) => {
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    setSelectedTags(menuTime)
  }, [menuTime])
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
    setSelectedTags(nextSelectedTags)
    handelBlur({ menuTime: nextSelectedTags })
  }

  return (
    <div className="mb-4">
      <span style={{ marginRight: 10 }}>Food Item Show Time:</span>
      {tagsData.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          <span className=" text-uppercase .font-size-14 font-weight-bold pb-10">{tag}</span>
        </CheckableTag>
      ))}
    </div>
  )
}

export default CheckableSelector
