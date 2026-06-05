import { Link } from 'react-router-dom';

export default function LeftPanel() {
    return(
        <>
            <aside id="leftPanel" className="left-panel">
                <nav>
                    <ul>
                        <li><Link to="/React/qa">Questions & Answers</Link></li>
                        <li><Link to="/React/projects">Projects</Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}