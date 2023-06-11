import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Senior Software Engineer{' '}
					<a href='https://www.hcltech.com/'>@HCL Technologies Limited</a>
				</div>
				<div className={styles.date}>Oct 2022 - Present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Analysis of specification provided by client.
						</li>
						<li>
						Develop UI screens using modern web
technology such as React, JavaScript's ,HTML 5
etc per design received .
						</li>
						
						<li>
						Following Proper Coding standards .
						</li>
						<li>Develop functionalities using JS and then
integrate with backend .</li>
<li>Gathering Requirement from interaction
designer in the form of wireframes and
converted those wireframe into HTML pages.</li>
<li>Fix front end related bugs in HTML5 CSS
Javascript's that were identified in QA .</li>
						
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
