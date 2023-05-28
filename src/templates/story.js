import * as React from 'react'
import Layout from '../components/layout'

const StoryTemplate = ({ pageContext: { Story } }) => {
    return (
        <Layout pageTitle={Story.title}>
            <p>By {Story.author[0].name}, {Story.authorTitle}</p>
            <p dangerouslySetInnerHTML={{ __html: Story.introduction.html5 }}></p>
            <img src={Story.image.image_large.uri} />
            <p dangerouslySetInnerHTML={{ __html: Story.description.html5 }}></p>
        </Layout>
    )
}
export default StoryTemplate
