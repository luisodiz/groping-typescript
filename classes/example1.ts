// Упражнение на перегрузку методов

class User {
  skills: string[] = []

  addSkill(skill: string): void
  addSkill(skills: string[]): void
  addSkill(skillOrSkills: string[] | string): void {
    if (Array.isArray(skillOrSkills)) {
      this.skills = this.skills.concat(skillOrSkills)
    } else {
      this.skills.push(skillOrSkills)
    }
  }
}

const user = new User()
user.addSkill(['html', 'js'])
console.log(user)
user.addSkill('react native')
console.log(user)

function run(distance: string): string
function run(distance: number): number
function run(distance: number | string): number | string {
  if (typeof distance == 'number') {
    return 1
  } else {
    return ''
  }
}

export {}
