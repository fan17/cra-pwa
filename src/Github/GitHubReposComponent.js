import React from 'react';

class GitHubReposComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: [],
        }
    }

    componentDidMount() {
        this.loadRepos();
    }

    async loadRepos() {
        fetch('https://api.github.com/users/jedrzejczak/repos')
            .then(response => response.json())
            .then(repos => this.setState({ repos }));
    }

    render() {
        return this.state.repos ? this.renderRepos() : this.renderPlaceholder();
    }

    renderRepos() {
        return (
            <>
                <h1>Repos</h1>
                {this.state.repos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </>
        );
    }

    renderPlaceholder() {
        return (
            <>
                Placeholder
            </>
        );
    }
}

export default GitHubReposComponent;