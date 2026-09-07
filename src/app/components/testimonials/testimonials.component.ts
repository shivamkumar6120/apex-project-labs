import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  collegeOrCompany: string;
  initials: string;
  categoryTag: string;
  accentClass: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  readonly testimonials: Testimonial[] = [
    {
      quote: "The code ran out of the box without dependency errors. The 1-on-1 WhatsApp setup help solved my environment issues in 15 minutes. The IEEE report was distinction-grade.",
      name: "Aarav K.",
      role: "Final Year Student",
      collegeOrCompany: "Pune University (SPPU)",
      initials: "AK",
      categoryTag: "AI/ML Project",
      accentClass: "bg-blue-600 text-white",
      rating: 5
    },
    {
      quote: "The Spring Boot and Angular architecture was so clean and well-commented. In my technical viva, the external examiner asked deep questions about the logic, and I could explain everything clearly.",
      name: "Rohan M.",
      role: "Information Technology",
      collegeOrCompany: "VTU Bangalore",
      initials: "RM",
      categoryTag: "Web Dev Project",
      accentClass: "bg-indigo-600 text-white",
      rating: 5
    },
    {
      quote: "I had never deployed a Flutter and Firebase app before. Apex Project Labs walked me through setting up Android Studio step-by-step. The documentation had every diagram needed.",
      name: "Pooja S.",
      role: "Computer Engineering",
      collegeOrCompany: "Mumbai University",
      initials: "PS",
      categoryTag: "App Dev Project",
      accentClass: "bg-emerald-600 text-white",
      rating: 5
    },
    {
      quote: "The dataset preprocessing and machine learning pipeline in the project were solid. It directly helped me understand real-world ML workflows, and I even showcased it on my resume for campus placements.",
      name: "Siddharth N.",
      role: "Data Science Graduate",
      collegeOrCompany: "Anna University",
      initials: "SN",
      categoryTag: "Data Science Project",
      accentClass: "bg-purple-600 text-white",
      rating: 5
    }
  ];
}
