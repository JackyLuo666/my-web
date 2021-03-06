import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'//解析表格
// import remarkToc from 'remark-toc'//生成目录
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'//代码样式
import sassMd from '../../assets/md/Sass.md'
import './Md.scss'
export default class Md extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className='mdroot'>
            <ReactMarkdown
                remarkPlugins={[remarkGfm
                    // , remarkToc
                ]}
                children={sassMd}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={darcula}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
        )
    }
}