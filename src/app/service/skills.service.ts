import { Injectable } from '@angular/core';
import { Skill } from '../model/skill.model';
 
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private storageKey = 'skills';
 
  getSkills(): Skill[] {
    const skillsString = localStorage.getItem(this.storageKey);
    return skillsString ? JSON.parse(skillsString) : [];
  }
 
  addSkill(skill: Skill): void {
    const skills = this.getSkills();
    skills.push(skill);
    localStorage.setItem(this.storageKey, JSON.stringify(skills));
  }
 
  removeSkill(index: number): void {
    const skills = this.getSkills();
    skills.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(skills));
  }
}

