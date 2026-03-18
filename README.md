
1,736
# PLT Calisthenics

PLT Calisthenics is an application for tracking your personal loads in calisthenics exercises such as pull-ups, dips, and muscle-ups. It allows you to record repetitions and additional weight for each exercise, making it easy to track and progress your routine.

---

## Main Features

- Simple recording of calisthenics exercises.

- Add repetitions and extra weight for each set.

- Dynamic routine management with options to clear or delete the last entry.

- Updated routine displayed on the main page.

- Navigation using `react-router-dom`.

- Responsive design with CSS styles and an image background.

---

## Installation and Execution

### 1. Clone the repository

Using HTTPS:

```bash
git clone https://github.com/BQC21/PLT_calisthenics.git
```

Using SSH:

```bash
git clone git@github.com:BQC21/PLT_calisthenics.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm run dev
```

### 4. Open in the browser

Visit http://localhost:5173/ to access the application.

---

## Usage

1. Click the +session button to update your current routine.

2. Select the exercise, enter the repetitions and the extra weight (0 kg by default if no weight is added).

3. Click Add exercise to add the set to the routine table.

4. Routine management options:

- Clean: Clears the entire routine.

- Delete last: Deletes the last added set.

5. When you're finished, click Submit.

6. Check the homepage for updates.

---

## Stack used

- React with react-router-dom for navigation.

- CSS for styling and responsive design.

- Vite as the bundler and development server.