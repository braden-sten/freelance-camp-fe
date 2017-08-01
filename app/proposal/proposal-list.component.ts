import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.bradensten.com', 'TypeScript', 150, 120, 15, 'b.sten88@gmail.com')
	proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://portfolio.bradensten.com', 'TypeScript', 150, 120, 15, 'b.sten88@gmail.com')
	proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://portfolio.bradensten.com', 'TypeScript', 150, 120, 15, 'b.sten88@gmail.com')

	proposals: Proposal[] = [
	  this.proposalOne,
	  this.proposalTwo,
	  this.proposalThree
  ]
}