# Google Drive Clone with Firebase Authentication

This project is a Google Drive clone built using React. It includes authentication using Firebase, allowing users to sign in with their Google main ID. Users can upload files, which are stored in Firebase Storage. Additional features such as a trash folder, download option, and a responsive sidebar menu are also included.

## Features

1. **Firebase Authentication**: Users can sign in with their Google main ID using Firebase Authentication.

2. **File Upload**: Users can upload files to the application, and they will be stored securely in Firebase Storage.

3. **Trash Folder**: Deleted files are moved to the trash folder, allowing users to recover them if needed.

4. **Download Option**: Users can download files directly from the interface.

5. **Responsive Sidebar Menu**: The sidebar menu adjusts according to the screen size, providing a seamless experience across devices.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: Provides authentication and storage services.
- CSS: Styling the components and making the interface visually appealing.

## Setup Instructions

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/google-drive-clone.git
   ```

2. Navigate to the project directory.
   ```bash
   cd google-drive-clone
   ```

3. Install dependencies.
   ```bash
   npm install
   ```

4. Set up Firebase Authentication and Storage in your Firebase project.

5. Configure Firebase credentials in the project.

6. Start the development server.
   ```bash
   npm start
   ```

7. Open your browser and visit `http://localhost:3000` to view the application.

## How to Use

- Upon opening the application, users will be prompted to sign in with their Google main ID.
- Once authenticated, users can upload files using the upload button.
- Uploaded files will be stored securely in Firebase Storage.
- Navigate through folders by clicking on them.
- Use the sidebar menu to access different sections such as Trash.
- Delete files by right-clicking on them and selecting the option.
- Files deleted will be moved to the Trash folder.
- Download files by clicking on the download icon next to them.
- Enjoy the responsive design that adapts to different screen sizes seamlessly.

## Credits

This project was created by [Your Name]. Special thanks to [mention anyone or any resource you'd like to credit].

## License

This project is licensed under the [MIT License](LICENSE).