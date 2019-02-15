const express = require('express');

const Project = require('../../../data/helpers/projectModel');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const projects = await Project.get();
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const project = await Project.get(req.params.id);
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id/actions', async (req, res) => {
	try {
		const project = await Project.getProjectActions(req.params.id);
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post('/', async (req, res) => {
	try {
		const project = await Project.insert(req.body);
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const project = await Project.remove(req.params.id);
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const project = await Project.update(req.params.id, req.body);
		res.status(200).json(project);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
