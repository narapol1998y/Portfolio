
const About = () => {
    return (
        <div >
            <div className="mockup-code md:text-base text-xs">
                <pre data-prefix=">"><code className="text-success">Class </code><code  className="text-warning">Narapol klamsud </code><code>&#123;</code></pre>
                <pre data-prefix=">"><code className="text-neutral-focus">// My vast variety of skills is continuously expanding.</code></pre>
                {/* construcktor */}
                <pre data-prefix=">" ><code className="text-warning">constructor</code><code>()</code> <code>&#123;</code></pre>
                <pre data-prefix=">" ><code className="text-accent">    This</code><code>.</code><code className="text-success">name</code> <code>=</code> <code className="text-orange-400">'narapol klamsud'</code></pre>
                <pre data-prefix=">" ><code className="text-accent">    This</code><code>.</code><code className="text-success">dayOfBirthTimestamp</code> <code>=</code> <code className="text-orange-400">16091998</code></pre>
                <pre data-prefix=">" ><code className="text-accent">    This</code><code>.</code><code className="text-success">email</code> <code>=</code> <code className="text-orange-400">'narapol25411998@gmail.com'</code></pre>
                <pre data-prefix=">"><code>&#125;</code></pre>
                {/* Education */}
                <pre data-prefix=">" ><code className="text-warning">education</code><code>()</code> <code>&#123;</code></pre>
                <pre data-prefix=">" ><code className="text-warning">   return</code><code>&#91;</code> </pre>
                <pre data-prefix=">" ><code className="text-warning">       &#123; </code><code>'now'</code><code> : </code><code className="text-orange-400">'Payap university - bachelor degree(3.54), Software Engineer (SE)'</code> <code className="text-warning">&#125;</code><code>,</code> </pre>
                <pre data-prefix=">" ><code className="text-warning">       &#123; </code><code>'2017-2020'</code><code> : </code><code className="text-orange-400">'Saraphi Technical college'</code> <code className="text-warning">&#125;</code><code>,</code> </pre>
                <pre data-prefix=">"><code> &#93;</code></pre>
                <pre data-prefix=">"><code>&#125;</code></pre>
                {/* workExperience */}
                <pre data-prefix=">" ><code className="text-warning">workExperience</code><code>()</code> <code>&#123;</code></pre>
                <pre data-prefix=">" ><code className="text-warning">   return</code><code>&#91;</code> </pre>
                <pre data-prefix=">" ><code className="text-warning">       &#123; </code><code>'now'</code><code> : </code><code className="text-orange-400">None!</code> <code className="text-warning">&#125;</code><code>,</code> </pre>
                <pre data-prefix=">"><code> &#93;</code></pre>
                <pre data-prefix=">"><code>&#125;</code></pre>
                {/* skills */}
                <pre data-prefix=">" ><code className="text-warning">skills</code><code>()</code> <code>&#123;</code></pre>
                <pre data-prefix=">" ><code className="text-warning">   return</code><code>&#91;</code>  </pre>
                <pre data-prefix=">" >      <code className="text-success ">'HTML/CSS/JS','Tailwind/Bootstrap','MaterialUI/Antd/daisyUI','ReactJS','ExpressJS','SQL/NoSQL','MySQL/MongoDB'</code></pre>
                <pre data-prefix=">">     <code>&#93;</code></pre>
                <pre data-prefix=">">   <code>&#125;</code></pre>
                <pre data-prefix=">"><code>&#125;</code></pre>
            </div>
        </div>
    )
}
export default About