# CV Angular App

This project is an Angular application designed to create a comprehensive CV (Curriculum Vitae) that includes multiple projects and positions, a form for users to submit their CV information, and applied styles for a polished look.

## Project Structure

The project is organized into several components, each responsible for different parts of the CV:

- **Core Module**: Contains models and services for managing CV data.
  - `models/cv.model.ts`: Defines the CV model.
  - `models/project.model.ts`: Defines the Project model.
  - `services/cv.service.ts`: Provides methods to manage CV data.

- **Components**:
  - `cv`: Displays the overall CV layout.
    - `cv.component.ts`: Main CV component logic.
    - `cv.component.html`: Template for the CV component.
    - `cv.component.scss`: Styles for the CV component.
  - `project-list`: Displays a list of projects.
    - `project-list.component.ts`: Logic for the project list.
    - `project-list.component.html`: Template for the project list, utilizing `@for` to iterate over projects.
    - `project-list.component.scss`: Styles for the project list.
  - `project-detail`: Displays detailed information about a selected project.
    - `project-detail.component.ts`: Logic for the project detail.
    - `project-detail.component.html`: Template for the project detail, using `@if` to conditionally display details.
    - `project-detail.component.scss`: Styles for the project detail.
  - `position-list`: Displays a list of positions held.
    - `position-list.component.ts`: Logic for the position list.
    - `position-list.component.html`: Template for the position list.
    - `position-list.component.scss`: Styles for the position list.
  - `cv-form`: Implements a reactive form for CV submission.
    - `cv-form.component.ts`: Logic for the CV form.
    - `cv-form.component.html`: Template for the CV form.
    - `cv-form.component.scss`: Styles for the CV form.
  - `shared`: Contains common components like header and footer.
    - `header`: Displays the header of the CV.
      - `header.component.ts`: Logic for the header.
      - `header.component.html`: Template for the header.
      - `header.component.scss`: Styles for the header.
    - `footer`: Displays the footer of the CV.
      - `footer.component.ts`: Logic for the footer.
      - `footer.component.html`: Template for the footer.
      - `footer.component.scss`: Styles for the footer.

## Routing

The application uses Angular routing to navigate between different components, including the CV view, project list, project detail, position list, and CV form.

## Styles

Global styles are defined in `src/styles/main.scss`, while component-specific styles are included in their respective `.scss` files.

## Getting Started

To run the application, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the development server with `ng serve`.
5. Open your browser and go to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.