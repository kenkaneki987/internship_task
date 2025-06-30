# Business Management System

### Business Management
- Business registration with detailed information
- Business profile management
- Business type selection
- Industry categorization
- Business size tracking
- Location management

### Department Management
- Create and manage departments
- Assign department heads
- Track department budgets
- Monitor department performance
- Department hierarchy visualization

### Employee Management
- Comprehensive employee profiles
- Role-based access control
- Department assignment
- Performance tracking
- Employee status management
- Contact information management

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- React Icons
- React Hook Form
- Zod (Form validation)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd business-management-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── business/
│   │   ├── BusinessRegistration.tsx
│   │   └── BusinessProfile.tsx
│   ├── department/
│   │   ├── DepartmentList.tsx
│   │   └── DepartmentForm.tsx
│   └── employee/
│       ├── EmployeeList.tsx
│       └── EmployeeForm.tsx
├── types/
│   └── index.ts
├── utils/
│   └── validation.ts
└── App.tsx
```

## Usage

### Business Registration
1. Navigate to the business registration page
2. Fill in the required business information
3. Select business type and industry
4. Add location details
5. Submit the form

### Department Management
1. Access the departments section
2. Create new departments using the department form
3. Assign department heads
4. Set department budgets
5. Monitor department performance

### Employee Management
1. Go to the employees section
2. Add new employees using the employee form
3. Assign employees to departments
4. Set employee roles and permissions
5. Track employee performance

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@businessmanagement.com or create an issue in the repository. 