import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillsService } from '../service/skills.service';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [];
  newSkill: Skill = { name: '' };
  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.getSkills();
  }
  addSkill(): void {
    if (this.newSkill.name.trim() !== '') {
      this.skillsService.addSkill(this.newSkill);
      this.skills = this.skillsService.getSkills();
      this.newSkill = { name: '' };
    }
  }
  removeSkill(index: number): void {
    this.skillsService.removeSkill(index);
    this.skills = this.skillsService.getSkills();
  }

}
