import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "material-ui/Table";
import { LinearProgress } from "material-ui/Progress";

class List extends Component {
	render() {
		const { findAll, listURL } = this.props;
		return (
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Notes</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{findAll.pending &&
							<TableRow>
								<TableCell colSpan="3">
									<LinearProgress />
								</TableCell>
							</TableRow>}
						{findAll.rejected &&
							<TableRow>
								<TableCell colSpan="3">
									{findAll.reason
										? <div>
												<p>
													{findAll.reason.error}
												</p>
												<p>
													{findAll.reason.exception}
												</p>
												<p>
													{findAll.reason.message}
												</p>
											</div>
										: <p>Error</p>}
								</TableCell>
							</TableRow>}
						{findAll.value &&
							findAll.value.data.content.map(row =>
								<TableRow key={row.id}>
									<TableCell>
										{row.id}
									</TableCell>
									<TableCell>
										<Link to={`${listURL}/${row.id}`}>
											{row.name}
										</Link>
									</TableCell>
									<TableCell>
										{row.notes}
									</TableCell>
								</TableRow>
							)}
					</TableBody>
				</Table>
			</div>
		);
	}
}
export default List;