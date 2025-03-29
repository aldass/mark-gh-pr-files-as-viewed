# mark-gh-pr-files-as-viewed

A utility that streamlines your workflow by marking GitHub pull request files as `viewed`. This is especially useful for marking all files as `viewed` on a PR with many changed files.

## Features

- **Automated Marking:** Quickly mark PR files as viewed.
- **Enhanced Workflow:** Helps manage and organize large PRs with multiple file changes.
- **Simple Integration:** Easily plug into your existing development environment and tools.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/aldass/mark-gh-pr-files-as-viewed.git
   cd mark-gh-pr-files-as-viewed
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

**Important:** Before running the script, update the following variables in [mark_viewed.js](mark_viewed.js) to match your GitHub repository details:

- `REPO_OWNER`: Your GitHub username or organization name.
- `REPO_NAME`: The repository name.
- `PR_NUMBER`: The pull request number you want to mark files as viewed.

## Usage

Execute the script with Node.js:
```sh
node mark_viewed.js
```
--or--
```sh
npm start
```

Customize the functionality further by editing [mark_viewed.js](mark_viewed.js) as needed.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
